<div class="container" align="justify">
<h1>Neural Network Self-Driving Car with Native JS</h1>

<p>In this project, we explore the use of neural networks to create a self-driving car simulation using only native JavaScript. The goal is to demonstrate the power and flexibility of neural networks in real-time applications and to provide a foundation for further development in autonomous driving technology.</p>

<p>A neural network is a series of algorithms designed to recognize patterns. It interprets sensory data through a kind of machine perception, clustering raw input into categories. For example, it can identify objects in an image or classify text.</p>

![neural network overview](https://github.com/user-attachments/assets/830615eb-9b35-4ac0-b59b-7e2af4cdd8cf)

<h3>Why Native JavaScript?</h3>
<p>Using native JavaScript (without external libraries or frameworks) allows for a more hands-on understanding of how the underlying mechanics work.</p>
<h4>Advantages: </h4>
<li><b>Performance:</b> Native JavaScript can be optimized directly.</li>
<li><b>Control:</b> Full control over the implementation and optimization</li>
<li><b>Learning Experiences:</b> Great for educational purposes to understand the core principles.</li>
<h4>Downsides: </h4>
<li><b>Complexity:</b> More complex to implement without the convenience of libraries.</li>
<li><b>Development Speed:</b> Slower due to manual implementation of features.</li>
<li><b>Maintenance:</b> Harder to maintain compared to using well-documented libraries.</li>

<h3>Save and Remove Functions</h3>
<p>In this project, we've implemented functions to save and remove the best-performing neural network (best brain). Here's a simple explanation:</p>
<h4>Save Function:</h4>
<li>The save function stores the best brain in the browser's local storage.</li>
<li>This allows you to persist the best neural network across sessions.</li><br>

```javascript
function save() {
    localStorage.setItem("bestBrain",
        JSON.stringify(bestCar.brain)
    )
}
```

<h4>Discard Function:</h4>
<li>The discard function removes the saved best brain from local storage.</li>
<li>This is useful if you want to reset the training and start fresh.</li><br>

```javascript
function discard(){
    localStorage.removeItem("bestBrain")
}
```

<p>By using these functions, you can easily save the neural network that performs best and continue improving it over time. This is a practical way to ensure that your self-driving car retains its learning even if you close the browser or refresh the page.</p>
</div>

