new Morris.Area({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2012', budget: 110, pay: 0 },
        { year: '2013', budget: 200, pay: 100 },
        { year: '2014', budget: 105, pay: 140 },
        { year: '2015', budget: 220, pay: 220 },
        { year: '2016', budget: 170, pay: 50 },
        { year: '2017', budget: 140, pay: 170 },
        { year: '2018', budget: 205, pay: 20 },
        { year: '2019', budget: 185, pay: 20 },
        { year: '2020', budget: 0, pay: 0 },
        { year: '2021', budget: 200, pay: 150 },
    ],
    xkey: 'year',
    ykeys: ['budget', 'pay'],
    labels: ['Проходной балл на бюджет', 'Проходной балл на платное'],
    pointSize: 2,
    hideHover: 'auto'
});