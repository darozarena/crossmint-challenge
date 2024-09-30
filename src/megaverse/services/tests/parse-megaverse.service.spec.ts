import { Test, TestingModule } from '@nestjs/testing';
import { GoalDTO } from '@crossmint/interfaces/crossmint.contract';
import { ParseMegaverseService } from '../parse-megaverse.service';

describe('ParseMegaverseService', () => {
  let service: ParseMegaverseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParseMegaverseService],
    }).compile();

    service = module.get<ParseMegaverseService>(ParseMegaverseService);
  });

  describe('parseFromGoal', () => {
    it('should parse goal correctly', () => {
      const mockGoalDTO: GoalDTO = {
        goal: [
          ['POLYANET', 'SPACE'],
          ['BLUE_SOLOON', 'RIGHT_COMETH'],
        ],
      };

      const result = service.parseFromGoal(mockGoalDTO);

      expect(result).toEqual([
        [
          { row: 0, column: 0, type: 'POLYANET' },
          { row: 0, column: 1, type: 'SPACE' },
        ],
        [
          { row: 1, column: 0, type: 'SOLOON', color: 'BLUE' },
          { row: 1, column: 1, type: 'COMETH', direction: 'RIGHT' },
        ],
      ]);
    });
  });
});
