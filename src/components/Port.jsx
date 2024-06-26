import { portText } from "@/constant";
import Image from "next/image";

export default function Port() {
    return (
        <section id="port">
            <div class="port__inner">
                <div class="port__title">portfolio <em>포폴 작업물</em></div>
                <div class="port__wrap">
                    {portText.map((port, key) => (
                        <div class="port__item" key="key">
                            <span class="num">{port.num}.</span>
                            <Image src={port.img} alt={port.title} width={420} height={262} />
                            <h3 class="title">{port.title}</h3>
                            <p class="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" class="site">사이트 보기</a>
                        </div>
                    ))}

                </div>
            </div>
        </section >
    )
}
