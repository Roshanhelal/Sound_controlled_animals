//https://teachablemachine.withgoogle.com/models/DeonAIH1k/
function startClassification() {
navigator.mediaDevices.getUserMedia({ audio: true});
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DeonAIH1k/model.json', modelReady);
 }
 
 function modelReady(){
     classifier.classify( gotResults);
 } 
 
 function gotResults(error, results) {
     if (error) {
         console.error(error); 
        } else {
         console.log(results);
         random_number_r=Math.floor(Math.random()*255)+1;
         random_number_g=Math.floor(Math.random()*255)+1;
         random_number_b=Math.floor(Math.random()*255)+1;
         document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
         document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
         document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
          document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

          img1=document.getElementById("alien1");

          if(results[0].label=="Dog"){
            img1.src="dog.jpg";
          }
          else if(results[0].label=="Cat"){
            img1.src="cat.jpg";
          }
          else if(results[0].label=="Lion"){
            img1.src="lion.jpg";
          }
          else if(results[0].label=="Monkey"){
            img1.src="monkey.jpg";
          }
          else if(results[0].label=="Background Noise"){
            img1.src="sound-wave-background-music-digital-equalizer-wireframe-electricity-technological-waves-studio-frequency-vector-soundtrack-150025314.jpg";
          }
        }
    }

    