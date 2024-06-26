import { skillText } from "@/constant";

export default function Skill() {
    return (
        <section id="skill">
            <div class="skill_inner">
                <div class="skill_title">
                    <h2>coding <em>도전기</em></h2>
                </div>
                <div class="skill_desc">
                    {skillText.map((skill, index) => (
                        <div key={index}>
                            <span>{index + 1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                    <div>

                        <span>.</span>
                        <h3>{skillText.title}.</h3>
                        <p>{skillText.desc}.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
