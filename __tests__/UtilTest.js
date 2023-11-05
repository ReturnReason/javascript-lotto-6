import calcProfit from '../src/utils/calcProfit';
import formatLottoNumbers from '../src/utils/formatLottoNumbers';

describe('💙 Util 함수를 테스트합니다. ฅ^._.^ฅ', () => {
  test('[formatLottoNumbers] lottoNumbers를 인자로 받아 포매팅된 문자열을 반환해요.', () => {
    const lottoNumbers = [8, 21, 23, 41, 42, 43];
    const expectedResult = '[8, 21, 23, 41, 42, 43]';

    expect(formatLottoNumbers(lottoNumbers)).toBe(expectedResult);
  });

  test('[calcProfit] 구입 금액과 당첨 금액을 인자로 받아 포매팅된 수익률을 반환해요.', () => {
    const mockData = {
      expectedResults: ['62.5%', '100,000.0%'],
      purchaseAmounts: [8_000, 30_000],
      winningAmounts: [5_000, 30_000_000],
    };

    mockData.expectedResults.forEach((expectedResult, i) => {
      expect(
        calcProfit(mockData.purchaseAmounts[i], mockData.winningAmounts[i]),
      ).toBe(expectedResult);
    });
  });
});
