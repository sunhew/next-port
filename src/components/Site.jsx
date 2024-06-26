import { siteText } from "@/constant";

export default function Site() {
    return (
        <section id="site">
            <div class="site__inner">
                <h2 class="site__title">Site coding <em>나의 작업물</em></h2>
                <div class="site__wrap">

                    {siteText.map((site, key) => (
                        <div class="site__item" key={key} >
                            <span class="num">{key + 1}.</span>
                            <div class="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3>
                                {site.title}
                            </h3>
                            <div class="btn">
                                <a>code</a>
                                <a>view</a>
                            </div>
                            <div class="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}
