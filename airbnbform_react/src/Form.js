import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div class="wrap">
            <div class="form-title">
                <h2>에어비앤비에서 숙소, 호텔등을 예약하세요.</h2>
            </div>

            <form>
                <div>
                    <label id="main-form-small-titles">목적지</label>
                    <input type="text"  placeholder="모든 위치"/>
                </div>

                <div>
                    <div>
                        <div class="set-width-parents">
                            <label id="main-form-small-titles" class="set-width-half" >체크인</label>
                            <label id="main-form-small-titles" class="set-width-half" >체크아웃</label>
                        </div>
                        <div class="set-width-parents">
                            <input type="date" class="set-width-half rightborder"/>
                            <input type="date" class="set-width-half leftborder"/>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div class="set-width-parents">
                            <label>어른</label>
                            <label>어린이</label>
                        </div>
                        <div class="set-width-parents">
                            <select id="inputState" class="set-width-half rightborder">
                                <option selected>성인 1명</option>
                                <option>성인 2명</option>
                                <option>성인 3명</option>
                                <option>성인 4명</option>
                                <option>성인 5명</option>
                                <option>성인 6명</option>
                                <option>성인 7명</option>
                                <option>성인 8명</option>
                                <option>성인 9명</option>
                                <option>성인 10명</option>
                                <option>성인 11명</option>
                                <option>성인 12명</option>
                            </select>
                            <select id="inputState" class="set-width-half leftborder">
                                <option selected>어린이 0명</option>
                                <option>어린이 1명</option>
                                <option>어린이 2명</option>
                                <option>어린이 3명</option>
                                <option>어린이 4명</option>
                                <option>어린이 5명</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="search-btn">
                    <button type="submit" class="mainform-search-btn">검색</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
