using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mathmagician
{
    public class FibonacciNumbers : NaturalNumbers
    {
        public FibonacciNumbers()
        {
            first = 0;
            increment = 1;
        }

        public override int GetNext(int x)
        {
            int output = increment;
            increment = x + increment;
            return output;
        }
    }
}
