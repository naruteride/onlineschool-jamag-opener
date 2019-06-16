onload = function () {
    if (document.querySelector("#subtitle")) {
        console.log("온라인수업 자막오프너 준비 중");

        const styles = `
            #jamag-controler {
                position: absolute;
                right: 0;
                z-index: 99999;
                transform: translateY(-100%);
                opacity: 0.3;
                transition: 0.2s;
            }
            #jamag-controler:hover {
                opacity: 0.7;
            }

            #jamag-controler > button {
                margin: unset;
                padding: 1px 6px;
                border: solid 2px rgb(221, 221, 221);
                line-height: normal;
                color: #000000;
                background-color: rgb(221, 221, 221);
            }

            #subtitle {
                top: unset !important;
                bottom: 0;
                width: 100%;
                height: 40px !important;
                font-size: 200% !important;
                text-shadow: 0 0 3px #000000aa;
            }
        `
        let styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)    // 스타일 미리 지정

        // 자막 켜는 버튼
        let jamagOpenBtn = document.createElement("button");
        jamagOpenBtn.id = "jamag-open-btn";
        jamagOpenBtn.appendChild(
            document.createTextNode("자막 켜기")
        );

/*
        // 자막 끄는 버튼
        let jamagCloseBtn = document.createElement("button");
        jamagCloseBtn.id = "jamag-close-btn";
        jamagCloseBtn.appendChild(
            document.createTextNode("자막 끄기")
        );
*/

        // 자막 컨트롤러
        let jamagControler = document.createElement("div");
        jamagControler.id = "jamag-controler";
        jamagControler.setAttribute("onclick", "return false;");
        jamagControler.appendChild(jamagOpenBtn);
        jamagControler.appendChild(document.createElement('br'));
        // jamagControler.appendChild(jamagCloseBtn);    // 자막 컨트롤러 안에 [자막 켜는 버튼], [자막 끄는 버튼]을 넣음

        // 온라인수업 동영상 컨트롤러
        let controller = document.querySelector("#controller-container2");
        // controller.appendChild(jamagControler);
        controller.insertBefore(jamagControler, controller.firstChild);



        // 메인 ****
        document.querySelector("#jamag-open-btn").addEventListener("click", () => {
            let subTitle = document.querySelector("#subtitle");
            if (subTitle.style.display == "none") {
                subTitle.style.display = "block";
                jamagOpenBtn.textContent = "자막 끄기";
                console.log("자막오프너 ON");
            } else {
                subTitle.style.display = "none";
                jamagOpenBtn.textContent = "자막 켜기";
                console.log("자막오프너 OFF");
            }
        });
        
        console.log("온라인수업 자막오프너 준비 완료");
    } else {

    }
}