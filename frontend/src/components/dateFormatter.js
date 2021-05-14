const dateFormatter = (d, a = 0) => {
    const date = new Date(d);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth();
    const year = date.getUTCFullYear();

    if (a === 1) {
      return { slug: (monthIndex + 1) + '-' + year, display: monthNames[monthIndex] + ' ' + year, path: year + '/' + (monthIndex + 1) };
    }

    return monthNames[monthIndex]+ ' ' + day + ', ' + year;
  };
  
  module.exports = dateFormatter;