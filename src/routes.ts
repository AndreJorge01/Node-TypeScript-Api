import { Request, Response } from 'express';
import CreateCoursesService from './CreateCoursesService';

export function createCourse(request: Request, response: Response) {

  CreateCoursesService.execute({
    name: "NodejS",
    educator: "Andre",
    duration: 20
  });

  return response.json();
}

