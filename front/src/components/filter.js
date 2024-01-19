import "../assets/style/filter.scss"
export default function Filter() {
    function year() {
        const date = new Date()
        const data = []
        for (let i = 1970; i <= date.getFullYear(); i++) {
            data.push(i)

        }
        return data
    }
    const filter = {
        genere: ["биографический", "боевик", "вестерн", "военный", "детектив", "детский", "документальный", "драма",
            "исторический", "кинокомикс", "комедия", "концерт", "короткометражный", "криминал", "мелодрама", "мистика", "музыка",
            "мультфильм", "мюзикл", "научный", "нуар", "приключения", "реалити-шоу", "семейный", "спорт", "ток-шоу", "триллер", "ужасы", "фантастика", "фэнтези"],
        continent: ["Американские",
            "Турецкие",
            "Российские",
            "Индийские",
            "Украинские",
            "Французские",
            "Казахстанские"],
    }
    return (
        <>
            <hr />

            <section className="section__filter">
                <div className="div__section">
                    <div>
                        <select>
                            <option>
                                Genere
                            </option>
                            {
                                filter.genere.map((e, i) => {
                                    return <option key={i}>{e}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>
                                Continent
                            </option>
                            {
                                filter.continent.map((e, i) => {
                                    return <option key={i}>{e}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>
                                Year
                            </option>
                            {
                                year().map((e, i) => {
                                    return <option key={i}>
                                        {e}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </section>
            <hr />
        </>

    )
}
