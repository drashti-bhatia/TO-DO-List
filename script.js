function addContent() {
    // let card = `<div><textarea name="content1" id="content1" rows="25" cols="45"></textarea></div>`;
    // let card = `<div><textarea name="content1" id="content1" rows="25" cols="45"></textarea></div>`;

    let card = `<div class="card">
                    <textarea class="card-header" placeholder="Heading.."></textarea>
                    <textarea class="card-textarea" placeholder="Write your task here..."></textarea>
                    <div class="position-btn">
                        <button class="btn" onclick="saveTask(this)">Save</button>
                        <button class="btn" onclick="deleteTask(this)">Delete</button>
                    </div>
                </div>`;

    document.getElementById("content").innerHTML += card;
}