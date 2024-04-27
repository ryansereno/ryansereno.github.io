# Understanding The Core of ML Libraries ∂L/∂z

Date: June 24, 2023

This is a Work in Progress

ML libraries like TensorFlow and PyTorch can feel overwhelming

But their core purpose is simple.

They have three primary functions:

- Create/ handle tensors
- Calculate gradients
- Provide an optimizer (optional)

Here’s we will focus on the calculating of gradients as it is the core mechanism through which neural nets learn.

![Screen-Shot-2017-07-16-at-4.44.08-PM.png](Understanding%20The%20Core%20of%20ML%20Libraries%20%E2%88%82L%20%E2%88%82z%20d8493c14778a41eabb365ed84c81e0fc/Screen-Shot-2017-07-16-at-4.44.08-PM.png)

Neural network 'learning' involves incrementally adjusting the model's parameters, based on the gradient of the loss function.

These adjustments are made in the direction that *minimizes* the loss function, a process called gradient descent.

To derive these gradients, all operations and their inputs during the forward pass must be tracked so that their derivatives can be calculated during the backward pass. 

This process, known as backpropagation, uses the chain rule to efficiently compute these gradients.

… *Work in progress*