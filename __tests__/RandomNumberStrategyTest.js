import { GAME_RULE } from '../src/constants/gameRule';
import RandomNumberStrategy from '../src/model/strategies/RandomNumberStrategy';

describe('💙 RandomNumberStrategy 클래스를 테스트합니다. ฅ^._.^ฅ', () => {
  const lottoNumberGenerator = new RandomNumberStrategy();

  test('[generateLottoNumber] 숫자 6개를 반환합니다.', () => {
    const lottoNumberLength = lottoNumberGenerator.generateLottoNumber().length;

    expect(lottoNumberLength).toBe(GAME_RULE.LOTTO_NUMBER_COUNT);
  });
});
