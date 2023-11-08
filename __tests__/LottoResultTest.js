import LottoResult from '../src/model/LottoResult.js';

describe('💙 LottoResult 클래스를 테스트합니다. ฅ^._.^ฅ', () => {
  let lottoResult;

  beforeEach(() => {
    lottoResult = new LottoResult();
    lottoResult.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    lottoResult.setBonusNumber(7);
  });

  test('[getWinningNumbers] 설정한 당첨 번호를 가져올 수 있다.', () => {
    expect(lottoResult.getWinningNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('[getWinningNumbers] 설정한 보너스 번호를 가져올 수 있다.', () => {
    expect(lottoResult.getBonusNumber()).toEqual(7);
  });
});
