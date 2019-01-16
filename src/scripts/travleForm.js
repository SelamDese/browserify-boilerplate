// this module creates and appends travle interest input form
const travleForm = {
    createAndAppendForm() {
        // create input form
        let inputForm = `
        <article>
        <h2>add your travle interest </h2>
            <section>
                <label for="new-interest">Name:</label>
                <input id="new-interest" name="new-interest" type="text" />
            </section>
            <section>
                <label for="description">Description:</label>
                <textArea id="description" name="description" type="text" ></textArea>
            </section>
            <section>
                <label for="cost">cost:</label>
                <input id="cost" name="cost" type="text" />
            </section>
            <section>
                <label for="place">place:</label>
                <select>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Toky">Toky</option>
                    <option value="Shanghai">Shanghai</option>
                </select>
            </section>
        </article>
            `
            const outputArticle = document.querySelector(".output")
            outputArticle.innerHTML = inputForm
    }
}
export default travleForm