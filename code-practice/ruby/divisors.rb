def divisible_by(num_array, divisors)
    num_array.each_with_object({}) do |num, results|
       results[num] = divisors.map do |divisor|
            num % divisor === 0 && num != 0 ? divisor : nil
        end.compact
    end
    .each do |num, results|
        if results.length === 0
            puts num.to_s + ' is not divisible by ' + pretty_list(divisors, 'or')
        else
            puts num.to_s + ' is divisible by ' + pretty_list(results,'and')
        end
    end
end

def pretty_list(array,conjunction)
    case array.length <=> 2
    when -1 
        array[0].to_s
    when 0
        array[0].to_s + ' ' + conjunction + ' ' + array[1].to_s
    when 1
        array[0...-1].join(', ') + ', ' + conjunction + ' ' + array[-1].to_s
    end
end

p divisible_by([-1,0,2,3,5,15,30,50],[3,5,15])
