using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mathmagician
{
    public class NaturalNumbers
    {
        protected int first;
        protected int increment;

                                                                 // ctor tab tab (new class stub)
        public NaturalNumbers()
        {
            first = 1;
            increment = 1;
        }

        public virtual int GetNext(int x)
        {
            return x+increment;
        }

        public int GetFirst()
        {
            return first;
        }

        public int[] GetSequence()
        {
                                                                // for tab tab (for loop stub)
            return GetSequence(10);
        }

        public int[] GetSequence(int length)
        {
            List<int> output = new List<int>();
            output.Add(GetFirst());
            while(output.Count < length)
            {
                output.Add(GetNext(output.Last()));
            }
            return output.ToArray();
        }

        public string ToString(int[] array)
        {
            string output = String.Join(" ", array);

            /*
            for (int i = 0; i < length; i++)
			{
                if (array[i] == array.Last())
                {
                    output += array[i].ToString();
                } else{
                    output += array[i].ToString() + " ";
                }
                output += array[i].ToString() + " ";
			}
            return output.TrimEnd();
            */

            return output;
        }
    }
}
