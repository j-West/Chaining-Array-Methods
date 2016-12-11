var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var integersAfter

// Leaves original integers array unchanged
console.log(integersAfter = integers.sort(function(a, b) {
                                            return a - b
                                          }).filter(function(integers) {
                                              return (integers <= 19)
                                            }).map(function(integers) {
                                                return integers * 1.5 -1
                                              }).reduce(function(sum, integers) {
                                                  return sum + integers
                                                }, 0));

// Changes original integers array
console.log(integers = integers.sort(function(a, b) {
                                            return a - b
                                          }).filter(function(integers) {
                                              return (integers <= 19)
                                            }).map(function(integers) {
                                                return integers * 1.5 -1
                                              }).reduce(function(sum, integers) {
                                                  return sum + integers
                                                }, 0));
