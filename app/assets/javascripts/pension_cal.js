$(document).ready(function() {
  window.PensionCal = (function($) {
    var $salaryParam = $('[data-salary]');
    var $ageParam = $('[data-age]');
    var $feesResult = $('#fees-result');
    var $feesResultSalary = $('#fees-result-salary');
    var $sexParam = $('[data-sex]');
    var $pensionResult = $('#pension-result');

    var percent = function (i) {
        return i / 100;
    };

    var pensionSumCalculator = function (params) {
        var default_params = {
                current_savings_in_pensions_funds: 0,

                gross_salary: (parseInt($salaryParam.val())) || 0,
                employer_provision: 10, // percent
                worker_provision: 7.5, // percent
                severance_pay_provisions: true, // does the employer put to the fund severance pay provisions

                estimated_yield: 4, // percent

                yearly_management_fee: 0.5, // percent
                deposits_fee: 2, // percent (premium)

                age_years: (parseInt($ageParam.val())) || 0,
                age_months: 0,
                pension_age: (parseInt($sexParam.val())) || 0
            };

        p = _.extend({}, default_params, params);

        var months_until_pension =
                (p.pension_age * 12) - (p.age_years * 12) - p.age_months;

        var monthly_provision_percent =
                percent(p.employer_provision) +
                percent(p.worker_provision) +
                percent(p.severance_pay_provisions ? 100 / 12 : 0),
            monthly_provision = monthly_provision_percent * p.gross_salary,
            monthly_provision_after_deposits_fee = monthly_provision * (1 - percent(p.deposits_fee));

        var pension_sum = p.current_savings_in_pensions_funds;
        for (var i = 0; i < months_until_pension; i++) {
            pension_sum *= (
                    1 +
                    Math.pow(1 + percent(p.estimated_yield), 1/12) -
                    Math.pow(1 + percent(p.yearly_management_fee), 1/12)
            );

            pension_sum += monthly_provision_after_deposits_fee;
        }
        
        // $pensionResult.text(pension_sum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
        return parseInt(pension_sum);
    };

    total_fees = function (params) {
        return pensionSumCalculator(_.extend({}, params, {deposits_fee: 0, yearly_management_fee: 0})) - pensionSumCalculator(params);
    };

    var salaryValue = (parseInt($salaryParam.val())) || (parseInt(10000)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    // $feesResultSalary.text(salaryValue);

    $(document).on('change', function() {
        var salaryValue = (parseInt($salaryParam.val()));
        $feesResult.text(total_fees().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
        // $feesResultSalary.text(salaryValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
        // console.log($salaryParam.val());
    })

    return {}
  })(jQuery);
})