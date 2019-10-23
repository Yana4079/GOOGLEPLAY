  
           function showHide(openmenu) {
            //Если элемент с id-шником element_id существует
            if (document.getElementById(openmenu)) { 
                //Записываем ссылку на элемент в переменную obj
                var obj = document.getElementById(openmenu); 
                //Если css-свойство display не block, то: 
                if (obj.style.display != "block") { 
                    obj.style.display = "block"; //Показываем элемент
                }
                else obj.style.display = "none"; //Скрываем элемент
            }
            //Если элемент с id-шником element_id не найден, то выводим сообщение
            else alert("Элемент с id: " + openmenu + " не найден!"); 
        } 


        jQuery(function($){
            $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
                var block = $("#openmenu"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
                if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
                    && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
                    block.hide(); // если условия выполняются - скрываем наш элемент
                }
            });
        });

/*
        document.querySelector("snByac").onclick = function(){
            var r = document.querySelector("DWPxHb").classList.toggle("move");
            this.textContent = r ? "Заезд" : "Въезд";
        }
*/

        $(function(){

            $('.XlMhZe').click(function(e){
                e.preventDefault();

                let val = parseInt($(this).find('.jUL89d').text());
                $(this).find('.jUL89d').text(val + 1);
                
            })

        });


        function showOpen() {
            //Если элемент с id-шником element_id существует
            if ((document.getElementById("open")) &&  (document.getElementById("colorHide"))) { 
                //Записываем ссылку на элемент в переменную obj
                var obj = document.getElementById("open"); 
                //Если css-свойство display не block, то: 
                if ((obj.style.maxHeight != "1000px") &&  (document.getElementById("colorHide").style.display != "none")) { 
                    obj.style.maxHeight = "1000px";
                    document.getElementById("colorHide").style.display = "none";
                     //Показываем элемент
                }
                else {
                    obj.style.maxHeight = "144px"; 
                    document.getElementById("colorHide").style.display = "inline-block"; //Скрываем элемент
                }
            }
            //Если элемент с id-шником element_id не найден, то выводим сообщение
            else alert("Элемент с id: " + open + " не найден!"); 
        } 
      
   
      