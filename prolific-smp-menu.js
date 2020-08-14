var smp_menu_html = `
<div data-v-5c058ce5="" id="smp-menu" style="display: none;">
    <div data-v-5c058ce5="" class="nav">
        <a class="right nav-lnk active" style="" id="smp-studies">studies</a>
        <a class="right nav-lnk" id="smp-settings">settings</a>
        <a class="right nav-lnk" id="smp-misc">misc</a>
    </div>
    <div class="content-container">
        <div data-v-5c058ce5="" class="content studies">
            <div class="info">No studies</div>
        </div>
        <div data-v-5c058ce5="" class="content settings" style="display:none;">
            <div class="category">
                <div class="cat-label">Notifications</div>
                <div class="options notifications">
                    <div class="opt">
                        <div class="opt-label">State</div>
                        <label class="notif-int switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="opt">
                        <div class="opt-label">Prolific Interval</div>
                        <div class="range-container notif-int">
                            <div class="slidecontainer">
                                <input type="range" min="5" max="30" value="15" class="range-slider round">
                            </div>
                            <div class="display"><span>n</span> secs</div>
                        </div>
                        <div class="opt-label info notif-countdown">Next update in <span>n</span> seconds</div>
                    </div>
                    <div class="opt">
                        <div class="opt-label">Server Interval</div>
                        <div class="range-container sv-notif-int">
                            <div class="slidecontainer">
                                <input type="range" min="1" max="30" value="3" class="range-slider round">
                            </div>
                            <div class="display"><span>n</span> secs</div>
                        </div>
                        <div class="opt-label info sv-notif-countdown">Next update in <span>n</span> seconds</div>
                    </div>
                    <div class="opt">
                        <div class="opt-label">Freshness Time</div>
                        <div class="range-container freshness-int">
                            <div class="slidecontainer">
                                <input type="range" min="5" max="120" value="45" class="range-slider round">
                            </div>
                            <div class="display"><span>n</span> secs</div>
                        </div>
                    </div>
                    <div class="opt">
                        <div class="opt-label">Mute Timeout</div>
                        <div class="range-container mute-int">
                            <div class="slidecontainer">
                                <input type="range" min="10" max="60" value="15" class="range-slider round">
                            </div>
                            <div class="display"><span>n</span> secs</div>
                        </div>
                        <div class="opt-label info mute-timeout">Unmute in <span>n</span> seconds</div>
                    </div>
                </div>
            </div>
            <div class="category">
                <div class="cat-label">Forced Entry</div>
                <div class="options forced-entry">
                    <div class="opt">
                        <div class="opt-label">Sound</div>
                        <label class="forced-int switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="opt">
                        <div class="opt-label">Interval</div>
                        <div class="range-container forced-int">
                            <div class="slidecontainer">
                                <input type="range" min="5" max="30" value="15" class="range-slider round">
                            </div>
                            <div class="display"><span>n</span> secs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div data-v-5c058ce5="" class="content misc" style="display:none;">
            <div class="category">
                <div class="cat-label">Debug</div>
                <div class="options debug">
                    <div class="opt">
                        <div class="opt-label">Logs</div>
                        <label class="logs switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
var smp_menu_style = `
<style>
    #smp-menu {
        position: absolute;
        top: 100%;
        right: 0;
        width: 400px;
        /*background: rgba(52,64,88,1);*/
        background-color: #3d4c68;
        z-index: 10000;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        border-radius: 0 0 0 4px;
        text-align: left;
        color: #fff;
        overflow: hidden;
        font-size: 1rem;
    }
    #smp-menu .left {
        -webkit-box-pack: start;
        justify-content: flex-start;
    }
    #smp-menu .right {
        -webkit-box-pack: end;
        justify-content: flex-end;
    }
    #smp-menu .nav {
        padding: 10px 10px 0px;
    }
    #smp-menu .nav div {
        display:inline-block;
    }
    #smp-menu .nav .title {
        padding: 10px 20px;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 13px;
    }
    #smp-menu .nav .nav-lnk{
        padding: 0px 8px 1px;
        background-color: #2f3b50;
        color: #bfcbd9;
        border-radius: 3px 3px 0 0;
        margin-bottom: 0px;
        margin-left: 4px;
        vertical-align: bottom;
    }
    #smp-menu .nav .nav-lnk:hover{
        background-color: #4b5e81;
        color: #fff;
    }
    #smp-menu .nav .nav-lnk.active{
        background-color: #1e2e3c;
        color: #fff;
    }
    #smp-menu .content-container {
        overflow: auto;
        max-height: 400px;
    }
    #smp-menu .content {
        background-color: #1e2e3c;
        padding: 5px 0;
    }
    #smp-menu .content.studies > div.info{
        font-size: 12px;
        text-align: center;
        padding: 15px;
        text-transform: uppercase;
    }
    #smp-menu .content .study {
    position: relative;
        display: flex;
        align-items: center;
        background-color:#2f3b50;
        margin: 5px 0;
        color: #fff;
        cursor: pointer;
    }
    #smp-menu .content .study:hover {
        background-color:#394760;
    }
    #smp-menu .content .study:hover .delete {
        display: inline-block;
    }
    #smp-menu .content .study div {
        /*display: inline-block;*/
        padding: 10px 10px;
    }
    #smp-menu .content .study div:nth-last-child(2) {
        padding-right: 20px;
    }
    #smp-menu .content .study .time {
        padding-left: 20px;
        text-align: center;
    }
    #smp-menu .content .study .time span {
        font-size: 12px;
        color: #ccc;
    }
    #smp-menu .content .study .info {
        flex-grow: 1;
        color: #bbb;
    }
    #smp-menu .content .study .info span{
        font-weight: 600;
        color: #fff;
    }
    #smp-menu .content .study .reward {
        font-weight: 600;
        color: #00ff55;
        text-align: left;
    }
    #smp-menu .content .study .delete {
        position: absolute;
        right: 0;
        align-self: flex-start;
        padding: 4px;
           display: none;
    }
    #smp-menu .content .study .delete span {
        display: inline-block;
        background: url('https://www.gstatic.com/images/icons/material/system/1x/close_white_20dp.png') center no-repeat;
        background-size: 14px;
        width: 18px;
        height: 18px;
        border-radius: 10px;
    }
    #smp-menu .content .study .delete span:hover {
        background-color: #4d5f80;
    }
    #smp-menu .content .study .delete.active span {
        background-color: #a32929;
    }
    #smp-menu .content .study .is-dot {
        position: absolute;
        left: -3px;
        margin-top: 4px;
        border: none;
    }
    #smp-menu .content .category {
        display: flex;
        padding: 10px 10px 5px;
    }
    #smp-menu .content .cat-label {
        text-transform: uppercase;
        padding-right: 10px;
        align-self: stretch;
        border-right: 1px solid #666;
        box-sizing: border-box;
        width: 30%;
        color: #fff;
        font-size: 12px;
        /*font-weight: 600;*/
    }
    #smp-menu .content .options {
        padding-left: 10px;
        box-sizing: border-box;
        width: 70%;
        font-size: 11px;
    }
    #smp-menu .content .opt {
        padding-bottom: 12px;
    }
    #smp-menu .content .options .opt:last-child {
        padding-bottom: 0;
    }
    #smp-menu .content .opt-label {
        text-transform: uppercase;
        padding-bottom: 6px;
        font-size: 11px;
        color: #f9f9f9;
    }
    #smp-menu .content .opt-label.info {
        text-transform: none;
        padding: 2px 0 4px;
        color: #ccc;
    }
    #smp-menu .content .opt-label span {
        color: #fff;
    }
    #smp-menu .content .opt-label .secs {
        color: #green;
    }
    #smp-menu .content .range-container {
        display:flex;
    }
    #smp-menu .content .range-container .display {
        padding-left: 8px;
        color: #aaa;
        font-weight: 600;
    }
    #smp-menu .content .range-container .display span {
        color: #fff;
    }

    /*   -----   SWITCH (checkbox)   -----   */
    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 17px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #394760;
        -webkit-transition: .3s;
        transition: .3s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 13px;
        width: 13px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .3s;
        transition: .3s;
    }

    input[type="checkbox"]:checked + .slider {
        background-color: #2196F3;
    }

    input[type="checkbox"]:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input[type="checkbox"]:checked + .slider:before {
        -webkit-transform: translateX(13px);
        -ms-transform: translateX(13px);
        transform: translateX(13px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 17px;
    }

    .slider.round:before {
        border-radius: 50%;
    }


    /*   -----   SLIDER (range)   -----   */
    .slidecontainer {
        width: 80%;
        margin-top: 1px;
    }

    .range-slider {
        -webkit-appearance: none;
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: #394760;
        outline: none;
        opacity: 1;
        -webkit-transition: .2s;
        transition: opacity .2s;
        background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            color-stop(0.15, #2196F3),
            color-stop(0.15, #394760)
        );
    }

    .range-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        overflow: visible;
        /*box-shadow: -200px 0 0 200px #2196F3;*/
    }

    .range-slider:disabled::-webkit-slider-thumb {
        cursor: default;
    }
    
    #smp-force{
        border: none;
        background: url(https://www.gstatic.com/images/icons/material/system/1x/refresh_black_20dp.png) center no-repeat;
        opacity: 0.6;
        padding: 14px;
        font-weight: normal;
        line-height: 1;
        width: 54px;
        text-align: center;
    }
    #smp-force:hover{
        opacity: 0.8;
    }
    #smp-force span{
        display: inline-block;
        width: 26px;
        color: #fff;
        background-color: #2eb82e;
        height: 26px;
        padding: 5px;
        font-family: inherit;
        font-size: 15px;
        border-radius: 14px;
        text-align: center;
    }
    #smp-force span:hover{
        opacity: 0.6;
    }
</style>`
