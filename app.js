let count = 0;

 const result = document.querySelector("#result");
 const btns = document.querySelectorAll(".btn");

  btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
      const styles = e.currentTarget.classList;
      if(styles.contains('decrease')){
        count--;
      }else if (styles.contains('increase')) {
        count++;
      } else if(styles.contains('reset')){
        count=0;
      }
      result.textContent = count;
    });
  });
