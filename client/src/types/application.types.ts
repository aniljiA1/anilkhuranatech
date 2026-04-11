export interface Application {
  _id: string;
  company: string;
  role: string;
  status: "Applied" | "Interview" | "Offer" | "Rejected";
  description: string;
  createdAt?: string;
}
