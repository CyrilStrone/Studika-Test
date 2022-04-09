import '../style/educational-institution-card.css'
import '../style/mobile.css'
import '../js/newchart.js'
import '../js/swiper.js'


window.onload = function() {

    let ctx = document.getElementById('myChart');
    Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(255, 255, 255, 1)';
    Chart.defaults.plugins.tooltip.titleColor = 'rgba(34, 34, 34,1)';
    Chart.defaults.plugins.tooltip.bodyColor = 'rgba(6, 86, 180,1)';
    Chart.defaults.plugins.tooltip.titleAlign = 'left';

    Chart.defaults.plugins.tooltip.padding = 16;
    Chart.defaults.plugins.legend.display = false;
    let data = {
        datasets: [{
            type: 'line',
            label: 'Бюджет',
            data: [120, 200, 100, 230, 165, 140, 205, 170, 0, 200],
            backgroundColor: [
                'rgba(171, 200, 234, 0.6)'
            ],
            borderColor: [
                'rgba(171, 200, 234, 0.6)'
            ],
            fill: 'origin',
            borderWidth: 0

        }, {
            type: 'line',
            label: 'Платное',
            data: [0, 100, 140, 230, 60, 160, 140, 20, 0, 160],
            backgroundColor: [
                'rgba(6, 86, 180, 0.6)'
            ],
            borderColor: [
                'rgba(6, 86, 180, 0.6)'
            ],
            fill: 'origin',
            borderWidth: 0,
        }],
        labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    };


    let myChart = new Chart(ctx, {

        data: data,
        options: {
            title: {
                display: true,
                text: 'Пример Chart.js'
            }
        }

    });
};