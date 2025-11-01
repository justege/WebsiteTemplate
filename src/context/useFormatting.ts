import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration);

const i18nKeyDate = 'general.formatting.date';
const i18nKeyTime = 'general.formatting.timeHoursMinutes';
const i18nKeyDateTime = 'general.formatting.dateTimeHoursMinutesSeconds';

const useFormatting = () => {

    const { t } = useTranslation();

    function _toDayJs(value: string): dayjs.Dayjs {
        return dayjs(value);
    }

    function _formatDateTime(value: string | null | undefined, formatLocaleKey = '', format = ''): string {
        if(!value) {
            return '-';
        }

        const _dayjs = _toDayJs(value);

        if (_dayjs.isValid()) {
            const _format = formatLocaleKey ? t(formatLocaleKey).toString(): format;
            return _dayjs.format(_format);
        }

        return '-';
    }

    function formatDate(value: string | null | undefined): string {
        if(!value) {
            return '-';
        }

        const localizedValue = value.slice(-1).toLocaleLowerCase() === 'z' ? value.slice(0, -1) : value;
        return _formatDateTime(localizedValue, i18nKeyDate);
    }

    function formatTime(value: string | null | undefined, format?: string): string {
        if(!value) {
            return '-';
        }

        return _formatDateTime(value, format !== undefined ? format : i18nKeyTime)
    }

    function formatDateTime(value: string | null | undefined): string {
        return formatTime(value, i18nKeyDateTime);
    }

    function formatFileSize(size: number): string {
        const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        
        let i = 0;

        while (size >= 1024) {
            size /= 1024
            ++i;
        }

        return size.toFixed(1) + ' ' + units[i];
    }

    return { formatDate, formatTime, formatFileSize, formatDateTime }

}

export default useFormatting;