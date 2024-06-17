document.addEventListener('DOMContentLoaded', function () {
    // Function to show the plot in the modal
    window.showPlot = function (plotId) {
        var modal = document.getElementById('plotModal');
        var plots = document.getElementsByClassName('plot');
        for (var i = 0; i < plots.length; i++) {
            plots[i].style.display = 'none';
        }
        document.getElementById(plotId).style.display = 'block';
        modal.style.display = 'block';
    }

    // Function to close the modal
    window.closePlot = function () {
        var modal = document.getElementById('plotModal');
        modal.style.display = 'none';
    }
});
