import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import React, { FunctionComponent, useState } from "react"
import "./app.scss"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App: FunctionComponent = () => {
    const [dateEnglish, setDateEnglish] = useState<string>("2077-10-15")
    const [dateNepali, setDateNepali] = useState<string>("")

    return (
        <div className='container'>
            <Header />
            <form>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='border-bottom mb-3'>
                            <h3>Basic Datepicker</h3>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-md-6 mb-3'>
                                <label htmlFor='start-date'>Date Selected: {dateEnglish}</label>
                                <NepaliDatePicker
                                    inputClassName='form-control'
                                    value={dateEnglish}
                                    onChange={(date: string) => setDateEnglish(date)}
                                    options={{ calenderLocale: "en" }}
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label htmlFor='end-date'>मिति Selected: {dateNepali}</label>
                                <NepaliDatePicker
                                    inputClassName='form-control'
                                    value={dateNepali}
                                    onChange={(date: string) => setDateNepali(date)}
                                    options={{ calenderLocale: "ne", valueLocale: "ne" }}
                                />
                            </div>
                        </div>
                        <div className='border-bottom mb-3'>
                            <h3>Basic Datepicker With Input Disabled</h3>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-md-6 mb-3'>
                                <label htmlFor='start-date'>Date Disabled: {dateEnglish}</label>
                                <NepaliDatePicker
                                    inputClassName='form-control'
                                    value={dateEnglish}
                                    onChange={(date: string) => setDateEnglish(date)}
                                    options={{ calenderLocale: "en" }}
                                    disabled
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label htmlFor='end-date'>मिति Disabled: {dateNepali}</label>
                                <NepaliDatePicker
                                    inputClassName='form-control'
                                    value={dateNepali}
                                    onChange={(date: string) => setDateNepali(date)}
                                    options={{ calenderLocale: "ne", valueLocale: "ne" }}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className='border-bottom mb-3'>
                            <h3>Datepicker With Reset Option</h3>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-md-6 mb-3'>
                                <label htmlFor='start-date'>Date Selected: {dateEnglish}</label>
                                <NepaliDatePicker
                                    inputClassName='form-control'
                                    value={dateEnglish}
                                    onChange={(date: string) => setDateEnglish(date)}
                                    options={{ calenderLocale: "en" }}
                                    showResetButton
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label htmlFor='end-date'>मिति Selected: {dateNepali}</label>
                                <NepaliDatePicker
                                    inputClassName='form-control'
                                    value={dateNepali}
                                    onChange={(date: string) => setDateNepali(date)}
                                    showResetButton
                                    resetButtonElement='↻'
                                    options={{ calenderLocale: "ne", valueLocale: "ne" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default App
