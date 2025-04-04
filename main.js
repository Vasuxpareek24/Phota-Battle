const allFollowBtns = document.querySelectorAll(".follow-btn");

  allFollowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("Following");
      btn.textContent = btn.classList.contains("Following") ? "Following" : "Follow";
    });
  });
  document.querySelectorAll(".post-card").forEach(post => {
    const openBtn = post.querySelector(".openComments");
    const modal = post.querySelector(".commentModal");
    const closeBtn = post.querySelector(".closeComments");
    const commentList = post.querySelector(".commentList");
    const commentInput = post.querySelector(".commentInput");
    const postBtn = post.querySelector(".postComment");
  
    // 🚫 Disable body scroll
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };
  
    // ✅ Enable body scroll
    const enableScroll = () => {
      document.body.style.overflow = '';
    };
  
    // Open modal
    openBtn.addEventListener("click", () => {
      modal.classList.add("show");
      disableScroll();
    });
  
    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
      enableScroll();
    });
  
    // Post comment
    postBtn.addEventListener("click", () => {
      const text = commentInput.value.trim();
      if (text !== "") {
        const p = document.createElement("p");
        p.innerHTML = `<strong>You:</strong> ${text}`;
        commentList.appendChild(p);
        commentInput.value = "";
        commentList.scrollTop = commentList.scrollHeight;
      }
    });
  
    commentInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        postBtn.click();
      }
    });
  });  