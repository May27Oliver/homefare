import {CalcCol, DateInput, NumInput, BillTitle, MemoDesc} from '../style/coreui'

const BillCalc = () =>{
    const DateDiff = function (date1, date2) {
        let stDay = new Date(date1);
        let enDay = new Date(date2);
        return  parseInt(Math.abs(stDay - enDay) / 1000 / 60 / 60 / 24) + 1; // 把相差的毫秒數轉換為天數
      };
    console.log('days',DateDiff('2020/02/17','2020/01/31'))
    return (
        <CalcCol>
            <BillTitle>電費</BillTitle>
            起日：<DateInput type="date"></DateInput>
            迄日：<DateInput type="date"></DateInput>
        </CalcCol>
    )
}

export default BillCalc;