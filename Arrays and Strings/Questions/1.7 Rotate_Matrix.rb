# 1.7 Rotate Matrix

def rotate matrix, direction
    newMatrix, finalMatrix, i = [], [], 0
    (matrix.length > matrix[0].length ? matrix.length : matrix[0].length).times do
        matrix.map { |row| row[i] != nil ? newMatrix << row[i] : nil }
        i+=1
    end
    direction == 'clockwise' ? newMatrix.each_slice(matrix.length).to_a.map { |newRow| newRow.reverse} : newMatrix.each_slice(matrix.length).to_a.reverse
end
