import {cn} from "../../../helpers";
import "./ProgressBar.scss";

export function ProgressBar({percent}) {
    const progressBarCn = cn('progressbar');
    return (
        <div className={progressBarCn()}>
            <div className={progressBarCn('description')}>
                <span className={progressBarCn('description-title')}>Заполнено</span>
                <span className={progressBarCn('description-percent')}>{percent}%</span>
            </div>
            <div className={progressBarCn('bar')}>
                <div className={progressBarCn('scale')}
                     style={{
                         width: `${percent}%`,
                     }}
                />
            </div>
        </div>
    );
}