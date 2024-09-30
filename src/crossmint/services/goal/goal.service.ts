import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { GoalDTO } from '../../interfaces/crossmint.contract';
import { HttpService } from '@nestjs/axios';
import { BASE_URL } from '@crossmint/constants';

@Injectable()
export class GoalService {
  constructor(protected readonly httpService: HttpService) {}

  async getGoalMap(candidateId: string): Promise<GoalDTO> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(`${BASE_URL}/map/${candidateId}/goal`),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        `Error fetching goal map: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
