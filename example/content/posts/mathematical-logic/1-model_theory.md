# Introduction to model theory

Science is about extracting the abstract, essential elements
of the real world and use them as object of study.\
The process of abstracting the real world is called
_modeling_ and what it produces is, obviously, a _model_.
Furthermore, we define _semantic gap_, the difference between
the world and the model.

## Mental model - how we represent the world

A mental model comprises following 4 elements:

* _Language_: a set of symbol
* _Theory_: sentences, which are composed of elements of the language, that
describe what is true in the world, known also as _facts_
* _Domain_: images and picture that represent elements of the language
* _Model_: images and pictures in the real world that conforms to the theory of
the model

**Note**: everybody may have a different mental model of the
_same_ elements of the real world.  In fact, a mental model
can't be considered a formal model, since the relationship
between elements of the language and elements of the domain
lay implicitly in our mind.

## Computational model - how we implement programs

## Logic model - how we make explicit what we mean

In a logic model, domain and model are defined as:

* _Domain_: ~~images and pictures~~ set of elements that represent elements of the
  language
* _Model_: ~~images and pictures~~ set of elements in the real world that conforms to
  the theory of the model

Whereas the elements (L,T,D,M) in a mental model are always
finite, the same elements in a logical model can be infinite
(e.g. domain may be the set of real numbers).

In order to make explicit the relationship between the 4
elements (L,T,D,M) in a logical model, we need to defines the
_intepretation function_ and the
_truth/entailment/satisfiability relation_ (represented with
the $$ \models $$ symbol).

* _Interpretation function_: a **function** that maps
  elements of the language to elements of the domain
* _Entailment relation_ ($$ \models $$): 

##
