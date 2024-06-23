# Vanilla RNN 🍦 to Structured SSM

Date: February 1, 2024

::: tip This article is a work in progress
:::

Understanding state space models (SSM’s) felt daunting to me.

But once I understood the origin of SSM’s and how they were built upon the principles of Recurrent Neural Networks (RNN’s), they became more intuitive.

Here, we will implement an RNN, convert it into a vanilla SSM and then implement modern techniques in deep sequence modeling to build a _structured_ SSM.

---

Let’s first take a look at the basic function signature of an RNN block:

```python
def RNN_block(x, prev_hidden_state) -> tuple:
		# perform linear operations and activation
    return y, new_hidden_state
```

The block takes in an input `x` and the previous hidden state `prev_hidden_state`

The block returns a tuple, containing the output `y` and the updated hidden state `new_hidden_state`
