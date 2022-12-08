package com.example.server.entities.typeConverters;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.usertype.UserType;

import java.io.Serializable;
import java.sql.*;

public class CustomIntArrayType
        implements UserType {

    @Override
    public int[] sqlTypes() {
        return new int[]{Types.ARRAY};
    }

    @Override
    public Class returnedClass() {
        return Integer[].class;
    }

    @Override
    public boolean equals(Object o, Object o1) throws HibernateException {
        return false;
    }

    @Override
    public int hashCode(Object o) throws HibernateException {
        return 0;
    }

    @Override
    public Object nullSafeGet(ResultSet resultSet, String[] names, SharedSessionContractImplementor sharedSessionContractImplementor, Object o) throws HibernateException, SQLException {
        Array array = resultSet.getArray(names[0]);
        return array != null ? array.getArray() : null;
    }

    @Override
    public void nullSafeSet(PreparedStatement statement, Object value, int i, SharedSessionContractImplementor session) throws HibernateException, SQLException {
        if (value != null && statement != null) {
            Array array = session.connection().createArrayOf("int[]", (Integer[])value);
            statement.setArray(i, array);
        } else {
            statement.setNull(i, sqlTypes()[0]);
        }
    }

    @Override
    public Object deepCopy(Object o) throws HibernateException {
        return null;
    }

    @Override
    public boolean isMutable() {
        return false;
    }

    @Override
    public Serializable disassemble(Object o) throws HibernateException {
        return null;
    }

    @Override
    public Object assemble(Serializable serializable, Object o) throws HibernateException {
        return null;
    }

    @Override
    public Object replace(Object o, Object o1, Object o2) throws HibernateException {
        return null;
    }

}
