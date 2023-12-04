const showCurrentDate = ()=> {
    let now = new Date();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let day = daysOfWeek[now.getDay()];
    let date = now.getDate();
    let month = monthsOfYear[now.getMonth()];
    let year = now.getFullYear();

    let currentDate = day + ", " + date + " " + month + " " + year;
    return currentDate
}

export default showCurrentDate