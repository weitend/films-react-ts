interface Cred {
  cast: [
    {
      known_for_department: string;
      name: string;
    }
  ];
}

export default function getJobsPerson(cred: Cred, job: string) {
  switch (job) {
    case "actor":
      return [
        cred.cast
          .filter((actor) => actor.known_for_department === "Acting")
          .map((actor) => actor.name)
          .join(", ") || "-",
      ];
    case "director":
      return [
        cred.cast
          .filter((person) => person.known_for_department === "Directing")
          .map((person) => person.name)
          .join(", ") || "-",
      ];
    case "writer":
      return [
        cred.cast
          .filter((person) => person.known_for_department === "Writing")
          .map((person) => person.name)
          .join(", ") || "-",
      ];
    default:
      return [];
  }
}
