import { introText } from "@/constant";
import Image from "next/image";

export default function Intro() {
    return (
        <div id="intro">
            <div class="intro__inner">
                <div class="intro__title">{introText.title}</div>
                <div class="intro__lines" aria-hidden="true">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div class="intro__text">
                    <div class="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div class="img">
                        <Image src={introText.img} alt={introText.title} width={300} height={300} />
                    </div>
                    <div class="intro__lines bottom" aria-hidden="true">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
