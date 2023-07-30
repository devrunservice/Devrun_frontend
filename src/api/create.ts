import { accAxios } from "./instance";
import { CreateLectureType } from "types";

export const createLecture = {
  createLecture: (params:CreateLectureType) => {
    const response = accAxios.post('/lectureresist', params)
    return response
  }
}