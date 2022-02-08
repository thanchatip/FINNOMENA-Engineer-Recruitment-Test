const toThaiDateString = function (milSeconds) {
  if (milSeconds === undefined) { return '-' }
  const shortMonths = ['ม.ค', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
  const d = new Date(milSeconds)
  const datestring = ('0' + d.getDate()).slice(-2) +
    ' ' +
    shortMonths[d.getMonth()] +
    ' ' +
    (d.getFullYear() + 543)
  return datestring
}

export default toThaiDateString
