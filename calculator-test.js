
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({rate: 6, years: 35, amount: 100000})).toEqual("3121.55")
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ rate: 6, years: 35, amount: 100000 })).toBeInstanceOf(String)
  expect(calculateMonthlyPayment({rate:80, years:10, amount: 200000})).toEqual("28038.33")
});

/// etc
