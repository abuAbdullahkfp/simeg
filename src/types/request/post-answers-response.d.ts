export interface PostAnswersReqBody {
  company: string;
  contact_email: string;
  data: [questions_id: string, type: string, answers: string];
}
