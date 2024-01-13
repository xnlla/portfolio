// thx: https://gakogako.com/typescript_day_diff/
interface Props {
    from: string;
}
const formatDate = (date: Date): string => {
    const y: number = date.getFullYear();
    const m: string = ("00" + (date.getMonth() + 1)).slice(-2);
    const d: string = ("00" + date.getDate()).slice(-2);
    return `${y + "-" + m + "-" + d}`;
};

export default function Dropbutton({ from }: Props) {
    const setDate: Date = new Date(from);
    const nowDate: Date = new Date(formatDate(new Date()));

    const diffDay: number =
        Math.floor((nowDate.getTime() - setDate.getTime()) / 86400000 / 365);

    return diffDay
}