import React, { FunctionComponent, useMemo } from "react"
import "../NepaliDatePicker.scss"
import { ConfigProvider } from "./Config"
import NepaliDatePicker from "./NepaliDatePicker"
import { ENGLISH, INepaliDatePicker, NEPALI, NepaliDatePickerProps } from "./Types"

const NepaliDatePickerWrapper: FunctionComponent<NepaliDatePickerProps> = (props) => {
    const calenderOptions = useMemo(
        () => ({
            closeOnSelect: true,
            calenderLocale: NEPALI,
            valueLocale: ENGLISH,
            ...props.options,
        }),
        [props.options],
    )

    return (
        <ConfigProvider>
            <NepaliDatePicker {...({ ...props, options: calenderOptions } as INepaliDatePicker)} />
        </ConfigProvider>
    )
}

NepaliDatePickerWrapper.defaultProps = {
    className: "nepali-date-picker",
    inputClassName: "datepicker-input",
    value: undefined,
    onChange: () => null,
    onSelect: () => null,
    options: {},
    placeholder: "कृपया मिति चयन गर्नुहोस्।",
    showResetButton: false,
    disabled: false,
    resetButtonElement: "X",
}

export default NepaliDatePickerWrapper
