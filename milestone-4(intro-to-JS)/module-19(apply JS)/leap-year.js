function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
return true;
    }
    else {
        return false;
    }
}

const myyear = 2022;
const isMyYearLeapYear = isLeapYear(myyear); 
console.log('Is My Year Leap Year: ', isMyYearLeapYear)

const yourYear = 1700;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('Is Your year is leap year: ', isYourYearLeapYear);