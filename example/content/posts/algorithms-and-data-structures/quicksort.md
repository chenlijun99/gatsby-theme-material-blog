---
title: "Quicksort"
date: 2019-10-07
tags: 
  - Sorting Algorithms
---

From wikipedia

# Quicksort

Quicksort (sometimes called partition-exchange sort) is an efficient sorting
algorithm, serving as a systematic method for placing the elements of a random
access file or an array in order. Developed by British computer scientist Tony
Hoare in 1959[1] and published in 1961,[2] it is still a commonly used
algorithm for sorting. When implemented well, it can be about two or three
times faster than its main competitors, merge sort and
heapsort.[3][contradictory]

Quicksort is a comparison sort, meaning that it can sort items of any type for
which a "less-than" relation (formally, a total order) is defined. Efficient
implementations of Quicksort are not a stable sort, meaning that the relative
order of equal sort items is not preserved. Quicksort can operate in-place on
an array, requiring small additional amounts of memory to perform the sorting.
It is very similar to selection sort, except that it does not always choose
worst-case partition.

Mathematical analysis of quicksort shows that, on average, the algorithm takes
O(n log n) comparisons to sort n items. In the worst case, it makes O(n2)
comparisons, though this behavior is rare.

## History

The quicksort algorithm was developed in 1959 by Tony Hoare while in the Soviet
Union, as a visiting student at Moscow State University. At that time, Hoare
worked on a project on machine translation for the National Physical
Laboratory. As a part of the translation process, he needed to sort the words
in Russian sentences prior to looking them up in a Russian-English dictionary
that was already sorted in alphabetic order on magnetic tape.[4] After
recognizing that his first idea, insertion sort, would be slow, he quickly came
up with a new idea that was Quicksort. He wrote a program in Mercury Autocode
for the partition but could not write the program to account for the list of
unsorted segments. On return to England, he was asked to write code for
Shellsort as part of his new job. Hoare mentioned to his boss that he knew of a
faster algorithm and his boss bet sixpence that he did not. His boss ultimately
accepted that he had lost the bet. Later, Hoare learned about ALGOL and its
ability to do recursion that enabled him to publish the code in Communications
of the Association for Computing Machinery, the premier computer science
journal of the time.[2][5]

Quicksort gained widespread adoption, appearing, for example, in Unix as the
default library sort subroutine. Hence, it lent its name to the C standard
library subroutine qsort[6] and in the reference implementation of Java.

Robert Sedgewick's Ph.D. thesis in 1975 is considered a milestone in the study
of Quicksort where he resolved many open problems related to the analysis of
various pivot selection schemes including Samplesort, adaptive partitioning by
Van Emden[7] as well as derivation of expected number of comparisons and
swaps.[6] Bentley and McIlroy incorporated various improvements for use in
programming libraries, including a technique to deal with equal elements and a
pivot scheme known as pseudomedian of nine, where a sample of nine elements is
divided into groups of three and then the median of the three medians from
three groups is chosen.[6] Jon Bentley described another simpler and compact
partitioning scheme in his book Programming Pearls that he attributed to Nico
Lomuto. Later Bentley wrote that he used Hoare's version for years but never
really understood it but Lomuto's version was simple enough to prove
correct.[8] Bentley described Quicksort as the "most beautiful code I had ever
written" in the same essay. Lomuto's partition scheme was also popularized by
the textbook Introduction to Algorithms although it is inferior to Hoare's
scheme because it does three times more swaps on average and degrades to O(n2)
runtime when all elements are equal.[9][self-published source?]

In 2009, Vladimir Yaroslavskiy proposed the new dual pivot Quicksort
implementation.[10] In the Java core library mailing lists, he initiated a
discussion claiming his new algorithm to be superior to the runtime library's
sorting method, which was at that time based on the widely used and carefully
tuned variant of classic Quicksort by Bentley and McIlroy.[11] Yaroslavskiy's
Quicksort has been chosen as the new default sorting algorithm in Oracle's Java
7 runtime library[12] after extensive empirical performance tests.[13]
