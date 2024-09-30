import { HttpException, HttpStatus } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { IAstralObject } from '@types';
import { retry } from '../../utils';
import { HttpService } from '@nestjs/axios';
import { BASE_URL } from '../../constants';

export abstract class AstralObjectService {
  constructor(protected readonly httpService: HttpService) {}

  async createAstralObject(
    candidateId: string,
    endpoint: string,
    astralObject: IAstralObject,
  ): Promise<void> {
    return retry(async () => {
      try {
        const response = await lastValueFrom(
          this.httpService.post(`${BASE_URL}/${endpoint}`, {
            ...astralObject,
            candidateId,
          }),
        );
        return response.data;
      } catch (error) {
        throw new HttpException(
          `Error creating ${endpoint}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    });
  }

  async deleteAstralObject(
    candidateId: string,
    endpoint: string,
    astralObject: IAstralObject,
  ): Promise<void> {
    try {
      const response = await lastValueFrom(
        this.httpService.delete(`${BASE_URL}/${endpoint}`, {
          data: { ...astralObject, candidateId },
        }),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        `Error deleting ${endpoint}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
