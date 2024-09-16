function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    let dob = new Date(dobInput);
    let currentTime = new Date();

    if (dobInput === "") {
        alert("Please enter your date of birth.");
        return;
    }

    var content = document.getElementById("calculation");
    content.style.display = "block";

    // Calculate the difference in time
    let totalMilliseconds = currentTime - dob;

    // Calculate total seconds, minutes, hours, and days
    let totalSeconds = Math.floor(totalMilliseconds / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);
    let totalDays = Math.floor(totalHours / 24);

    // Calculate years, months, and days
    let years = currentTime.getFullYear() - dob.getFullYear();
    let monthsDiff = currentTime.getMonth() - dob.getMonth();
    let daysDiff = currentTime.getDate() - dob.getDate();

    // Adjust for negative months and days
    if (monthsDiff < 0) {
        years -= 1;
        monthsDiff += 12;
    }
    if (daysDiff < 0) {
        monthsDiff -= 1;
        let previousMonth = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0);
        daysDiff += previousMonth.getDate();
    }

    // Calculate remaining hours, minutes, and seconds
    let remainingMilliseconds = totalMilliseconds % (24 * 60 * 60 * 1000); // Remaining milliseconds in the current day
    let hours = Math.floor(remainingMilliseconds / (60 * 60 * 1000));
    let minutes = Math.floor((remainingMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((remainingMilliseconds % (60 * 1000)) / 1000);

    // Display the results
    document.getElementById("yrs").innerText = years;
    document.getElementById("months").innerText = monthsDiff;
    document.getElementById("days").innerText = daysDiff;
    document.getElementById("hrs").innerText = (hours < 10 ? "0" : "") + hours;
    document.getElementById("min").innerText = (minutes < 10 ? "0" : "") + minutes;
    document.getElementById("sec").innerText = (seconds < 10 ? "0" : "") + seconds;

    // Display total days, hours, minutes, and seconds
    document.getElementById("totalDays").innerText = totalDays;
    document.getElementById("totalHours").innerText = totalHours;
    document.getElementById("totalMinutes").innerText = totalMinutes;
    document.getElementById("totalSeconds").innerText = totalSeconds;
}