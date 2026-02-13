import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Array "mo:core/Array";
import List "mo:core/List";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
    isRead : Bool;
  };

  let submissionsMap = Map.empty<Time.Time, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("All fields are required");
    };

    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp;
      isRead = false;
    };
    submissionsMap.add(timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    let iter = submissionsMap.entries();
    let list = List.empty<ContactSubmission>();

    for ((_, submission) in iter) {
      list.add(submission);
    };

    list.toArray();
  };

  public query ({ caller }) func getUnreadSubmissions() : async [ContactSubmission] {
    let iter = submissionsMap.entries();
    let list = List.empty<ContactSubmission>();

    for ((_, submission) in iter) {
      if (not submission.isRead) {
        list.add(submission);
      };
    };

    list.toArray();
  };

  public shared ({ caller }) func markAsRead(timestamp : Time.Time) : async () {
    switch (submissionsMap.get(timestamp)) {
      case (null) {
        Runtime.trap("Submission not found");
      };
      case (?submission) {
        let updatedSubmission = { submission with isRead = true };
        submissionsMap.add(timestamp, updatedSubmission);
      };
    };
  };

  public shared ({ caller }) func deleteSubmission(timestamp : Time.Time) : async () {
    if (not submissionsMap.containsKey(timestamp)) {
      Runtime.trap("Submission not found");
    };
    submissionsMap.remove(timestamp);
  };
};
